import { useState,SyntheticEvent, } from "react";
import "./style.css";
type birthType={month:string,day:string,year:string}
enum TypeData{
    MONTH,
    YEAR,
    DAY
}
const MonthDays={
    month:0,
    jan : 31, 
    feb : 28, 
    mar : 31, 
    apr : 30, 
    may : 31, 
    jun : 30, 
    jul : 31, 
    aug : 31, 
    sep : 30, 
    oct : 31, 
    nov : 30, 
    dec : 31, 
} as Record<string,number>
export default function SelectBirth() {
    function setBirth(type:TypeData){
        return(event:SyntheticEvent<HTMLSelectElement>)=>{
            const val=event.currentTarget.value
            setData((preVal)=>{
                switch (type) {
                    case TypeData.MONTH:
                        return {...preVal,month:val}
                    case TypeData.DAY:
                        return {...preVal,day:val}
                    case TypeData.YEAR:
                        return {...preVal,year:val}
                }
            })
        }
        
    }
    const CurrYear=new Date().getFullYear()
    const [data,setData]=useState({day:"14",month:"feb",year:CurrYear.toString()} as birthType)
    const Days=Array.from(Array(MonthDays[data.month]).keys())
    const Years=Array.from(Array(CurrYear-1989).keys())
    return (
        <div className="birth-date">
            <select name="day" defaultValue={data.day} onChange={setBirth(TypeData.DAY)}>
                <option value="day">Day</option>
                {Days.slice(1).map((num)=>{
                    return <option key={num} value={num}>{num}</option>
                })}
            </select>
            <select name="month" onChange={setBirth(TypeData.MONTH)} defaultValue={data.month} >
                <option value="month">Month</option>
                <option value="jan">Jan</option>
                <option value="feb" >Feb</option>
                <option value="mar">Mar</option>
                <option value="apr">Apr</option>
                <option value="may">May</option>
                <option value="jun">Jun</option>
                <option value="jul">Jul</option>
                <option value="aug">Aug</option>
                <option value="sep">Sep</option>
                <option value="oct">Oct</option>
                <option value="nov">Nov</option>
                <option value="dec">Dec</option>
            </select>
            <select name="year" defaultValue={data.year} onChange={setBirth(TypeData.YEAR)}>
                <option value="year">Year</option>
                {
                    Years.map((_,i)=>{
                        return <option key={i} value={CurrYear-i}>{CurrYear-i}</option>
                    })
                }
                <option value="1800">1800</option>
            </select>
        </div>
    );
}
