export default function TermsAgree({ agreed, setAgreed }: {agreed: boolean, setAgreed: (agreed: boolean) => void}){
    return (
        <div className="flex items-center my-5">
            <input 
                type="checkbox" 
                name="checkbox" 
                id="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="bg-amber-200 hover:bg-amber-400 cursor-pointer w-5 h-5 border-3 border-rose-500 rounded-lg checked:bg-green-500" 
            />
            <label htmlFor="checkbox" className="ml-3">Agreed to terms and condition</label>
        </div>
    )
}