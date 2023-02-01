import { DataType, User } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Button from "../Button";
import HeroInfo from "../HeroInfo";
import NestedSelect from "../NestedSelect";
import TermsAgree from "../Terms";

export interface PropsType {
    data?: User | null;
    setResponse?: (response: User | null) => void;
    setSelectedOptionsTree?: ((selected: DataType[] | null) => void | undefined) | undefined;
}

export default function Display({ data, setResponse, setSelectedOptionsTree }: PropsType){

    const [storedata, setStoredData] = useState<DataType[] | null>(null);
    const [name , setName] = useState<{value: string, error: string}>({ value: data?.name || "" , error: "" });
    const [agreed, setAgreed] = useState<boolean>(data?.agreedToTerms || false);
    const [selectedArr, setSelectedArr] = useState<DataType[] | null>(null);


    const [selectedId, setSelectedId] = useState<number | null >(data?.seletctedOption.id || null);
    const [selectedOption, setSelectedOption] = useState<any | null>(data?.seletctedOption || null);

    
    


    useEffect(() => {
        const apiCall = async () => {
        const response = await fetch('/api/getalldata')
        const data = await response.json()
        setStoredData(data.data.sort((a: DataType, b: DataType) => a.id - b.id))
        }

        apiCall()
    
    }, [])


    const handleEdit = async () => {
        const { id, value } = selectedOption;
        const userId = data?._id;

        if(name.value !== data?.name || selectedOption.id !== data?.seletctedOption.id || agreed !== data?.agreedToTerms){
            
            if(!name.value ){
                setName({ value: name.value, error: "Please enter your name" })
                return;
            }
            if(name.value.length < 3){
                setName({ value: name.value, error: "Name must be at least 3 characters" })
                return;
            }
            if(!selectedId){
                toast.error('Please select at least one option')
                return;
            }
            
            
            const response = await fetch('/api/edituser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name.value, id, value, userId })
            })
    
            const resData = await response.json()
            if(resData.success){
                toast.success('Data updated successfully')
                setResponse?.(resData.user)
            }

            return;
        }

        toast.error('No changes made')

        

    }

    const handleSave = async () => {
        if(selectedOption && data){
            handleEdit()
            return;
        }
        if(!name.value ){
            setName({ value: name.value, error: "Please enter your name" })
            return;
        }
        if(name.value.length < 3){
            setName({ value: name.value, error: "Name must be at least 3 characters" })
            return;
        }
        if(!selectedId){
            toast.error('Please select at least one option')
            return;
        }

        const getIdAndValue = () => {
            if(selectedArr){
                const { id, value } = selectedArr!.pop() as DataType;
                return { id, value }
            } 
        }

        const { id, value } = getIdAndValue() as DataType;
        

        const response = await fetch('/api/savedata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                seletctedOption: {
                    id,
                    value
                },
                agreedToTerms: agreed
            })
        })

        const responseData = await response.json()
        if(responseData.success){
            toast.success('Data saved successfully')
            setResponse?.(responseData.user)
            setName({ value: "", error: "" })
            setAgreed(false)
            setSelectedArr(null)
            setSelectedId(null)
        }

    }

    return (
        <div className='max-w-[450px] flex flex-col items-center my-10'>
          <HeroInfo name={name.value} error={name.error} setName={setName} />
          
          <div className='w-full bg-slate-100 text-slate-900 py-6 pl-3 pr-10 rounded-lg shadow-sm '>
              <NestedSelect 
                data={storedata} 
                setSelected={setSelectedArr} 
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                setSelectedOptionsTree={setSelectedOptionsTree}
            />
          </div>

          <TermsAgree agreed={agreed} setAgreed={setAgreed} />

          <Button 
            text='Save' 
            width={28}
            onClick={handleSave}
          />
        </div>
    )
}