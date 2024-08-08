import redmi from "./images/redmi.png";
import vivo from "./images/vivo.png";
import samsung from "./images/samsung.png";
import huawei from "./images/huawei.png";
import apple from "./images/apple.png";
import oppo from "./images/oppo.png";
import lenovo from "./images/lenovo.png";

export const Companies = ()=>{
    return (
        <div className="companies">
            <CompanyElement  image={redmi} />
            <CompanyElement  image={vivo} />
            <CompanyElement  image={samsung} />
            <CompanyElement  image={huawei} />
            <CompanyElement  image={apple} />
            <CompanyElement  image={oppo} />
            <CompanyElement  image={lenovo} />
            
        </div>
    );
}

const CompanyElement = (props)=>{
    
    return (
            <img src={props.image} />
    );

};