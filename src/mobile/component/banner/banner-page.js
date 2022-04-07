import ImageBanner from "./components/image-banner";
import {useEffect, useState} from 'react'
import {httpService} from "../../../core/http-service";
import {environment} from "../../../core/environments/environment";
const BannerPage = () => {
  const [isBannersFetched,setIsBannerFetched] = useState(true)
  const [banners,setBanners] = useState([])

  useEffect(()=>{
    getBanners()
    return ()=>{
      getBanners()
    }
  },[])

  const getBanners =()=>{
    httpService.get(environment.urls.api)
        .then(response=>{
          setIsBannerFetched(false)
          setBanners(response.data)
        })
        .catch(error=>{
          setIsBannerFetched(false)
          setBanners([])
        })
  }

  return (
    <div className="flex mt-14">
      <ImageBanner/>
    </div>
  );
};

export default BannerPage;
