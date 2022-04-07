import {Select, Spin} from "antd";
import {useState} from 'react'
const SearchBar = () => {
    const [options,setOptions] = useState([
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
        }
    ])

    const handleSearch = (searchValue)=>{
        setOptions(searchValue?searchQuery(searchValue):[])
    }
    const  onSelect = (value)=>{
        console.log(options)
        console.log(value)
    }

   const searchQuery =(value)=>{
     const data= options.filter(item=>item.brand_name?.includes(value.toString()))
          .map((search,index)=>({
              value:`${search?.name}${index}`,
              label:(
                  <div>
                      <span>{search?.name}</span>
                  </div>
              )
          }))
       return data
   }
  return (
      <Select
          showArrow={false}
          showSearch={true}
          placeholder="Search companies e.g @company_name"
          optionFilterProp="children"
          filterOption={(input, option) =>
              option.label?.toLowerCase().indexOf(input.toLowerCase()) >=0||
              option.title?.toLowerCase().indexOf(input.toLowerCase())>=0
          }
          options={options.map((_, index) => {
              return {
                  key: index,
                  value: _.id,
                  label: _.name,
                  title: _.brand_name,
              };
          })}
      ></Select>
  );
};

export default SearchBar;
