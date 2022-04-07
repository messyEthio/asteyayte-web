import {AutoComplete,Input} from "antd";
import {useEffect, useState} from 'react'
const SearchBar = () => {
    const [value,setValue] = useState("")
    const [options,setOptions] = useState([])
    const dataSource = [
        {
            id:1,
            name:'Commercial bank of Ethiopia',
            brand_name:'cbe'
        },
        {
            id:2,
            name:'Bank of Abyssinia',
            brand_name:'boa'
        },
        {
            id:3,
            name:'Amhara Bank',
            brand_name:'ab'
        },
        {
            id:4,
            name:'CBE_Kidist maryam',
            brand_name:'cbe'
        },
    ]

    const handleSearch = (searchText)=>{
        setOptions(
            !searchText
                ? []
                : searchQuery(searchText)
        );
    }
    const  onSelect = (value,options)=>{
        setValue(value)
        console.log(options)
    }

    const searchQuery = (searchValue) => {
        const searchText = searchValue.toLowerCase()
        return dataSource.filter(data=>data.brand_name.toLowerCase().indexOf(searchText)!==-1||data.name.toLowerCase().indexOf(searchText)!==-1)
            .map(obj=>{
                if (obj!==undefined){
                    return {
                        value: `${obj.name}`,
                        label: (
                            <div>
                                <span>{obj.name}</span>
                            </div>
                        )
                    };
                }else {
                    return []
                }
            })
    }

   const onChange =(data)=>{
        setValue(data)
   }
  return (
      <AutoComplete
        value={value}
        allowClear={true}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        onChange={onChange}
      >
          <Input size={'large'} placeholder={'Search companies, Staffs and Users'}/>
      </AutoComplete>
  );
};

export default SearchBar;
