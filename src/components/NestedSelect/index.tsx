import React, { useState } from 'react';
import { DataType } from '../../types';

interface Props {
  data: DataType[] | null;
  setSelected: (selected: DataType[]) => void;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  setSelectedOptionsTree: ((selected: DataType[] | null) => void | undefined) | undefined;
  setSelectedOption: (option: DataType | null) => void;
}

export default function NestedSelect ({ data, setSelected, selectedId, setSelectedId,  setSelectedOptionsTree, setSelectedOption }: Props) {
  const [expandedOptions, setexpandedOptions] = useState<number[]>([]);
  
  if(data === null) return <div>Loading...</div>

  const handleExpand = (id: number) => {
    setexpandedOptions(prev => {
      if (prev.includes(id)) {
        return prev.filter(curId => curId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelect = (id: number) => {
    let tree = getselectedId(data, id);
    setSelectedId(id);
    setSelected(tree);
    setSelectedOptionsTree!(tree);

    setSelectedOption(tree[tree.length - 1])
  };

  const getselectedId = (options: DataType[], id: number): DataType[] => {
    let selectedId: DataType[] = [];

    options.forEach(option => {
      if (option.id === id) {
        selectedId.push(option);
      } else if (option.children) {
        const foundOption = getselectedId(option.children, id);
        if (foundOption.length > 0) {
          selectedId = [option, ...foundOption];
        }
      }
    });

    return selectedId;
  };


  const renderOption = (options: DataType[]): React.ReactNode => {
    return options.map(option => {
      return (
        <ul key={option.id} className="ml-5">
          <li className='my-2 cursor-pointer'>
            <span 
                className='border-b-black'
                onClick={() => {
                    handleExpand(option.id)
                    if(option.children?.length === 0){
                        handleSelect(option.id)
                    }
                }}
            >
              {option.value}
            </span>
            {option.children && option.children.length > 0 && (
              <span className='ml-2' onClick={() => handleExpand(option.id)}>
                {expandedOptions.includes(option.id)
                  ? '-'
                  : '+'}
              </span>
            )}
            {selectedId === option.id && <span className='ml-2 text-xl font-bold'>&#x2713;</span>}
            {option.children &&
              option.children.length > 0 &&
              expandedOptions.includes(option.id) &&
              renderOption(option.children)}
          </li>
        </ul>
      );
    });
  };

  return <div>{renderOption(data)}</div>;
};
