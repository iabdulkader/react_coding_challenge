import { DataType } from "@/types";

interface Props {
    selectedArr: DataType[] | null;
}


export default function SeletedTree({ selectedArr }: Props) {

    console.log(selectedArr)

    if(!selectedArr || selectedArr?.length === 0) return (<div></div>)

    return (
        <div>
            { selectedArr.map((item, index) => {
                return (
                    <div key={index} className="ml-5">
                        <span style={{ marginLeft: `${index}rem`}}>{item.value}</span>
                    </div>
                )
                }
                
            )}
        </div>
    )

}