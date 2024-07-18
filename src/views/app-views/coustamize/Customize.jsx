import React from "react";
import CustomSlider from "../../../components/coustomSliders/CoustomSlider";

const Customize = () => {
  const data = [
    {
      id: 1,
      Image:
        "https://i.pinimg.com/736x/ff/a3/d0/ffa3d0db7d4e4b254474e0c479c893aa.jpg",
    },
    {
      id: 2,
      Image:
        "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwa77f94b0/images/68185501/Rebel_68185501_red_hi-res.jpg?sw=750&sh=750&sm=fit&q=60",
    },
    {
      id: 3,
      Image: "https://m.media-amazon.com/images/I/61Hf74u2iGL._AC_UY1100_.jpg",
    },
    {
      id: 4,
      Image:
        "https://www.thejerseyplace.com/wp-content/uploads/2022/09/hj9606_adidas_germany_home_jsy_2022_01-768x768-1.jpg",
    },
    {
      id: 5,
      Image:
        "https://cdn.shopify.com/s/files/1/0871/5558/products/bayernhomejerseycl_b53791bc-5204-4a8f-9986-ded3a3d146fe_600x.png?v=1627776465",
    },
    {
      id: 6,
      Image:
        "https://static-01.daraz.pk/p/d206b1dbe5128e23877cf8733f23596c.png_750x750.jpg_.webp",
    },
    {
      id: 7,
      Image:
        "https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,f=webp//pub/media/catalog/product//1/9/19012491434-1_m0dz1yicvhvaxeuf.jpg",
    },
  ];
  const options = [
    {
      Id: 2,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec3cdf8f-ecd3-47d5-8206-655f7272177b/air-max-dawn-ayakkabısı-MmLxf4.png",
      New: true,
      Title: "Nike Air Max Dawn",
      Desc: "Erkek Ayakkabısı",
      Color: "4 Renk",
      Price: "1.669,90",
    },
    {
      Id: 3,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c4e6929-fbbc-495e-b8af-ec76d6e163fd/winflo-8-yol-koşu-ayakkabısı-LHnhnx.png",
      New: false,
      Title: "Nike WinFlo 8",
      Desc: "Erkek Yol Koşu Ayakkabısı",
      Color: "1 Renk",
      Price: "1.449,90",
    },
    {
      Id: 4,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a17c1c96-1088-4ea6-bd8d-be5e8dca2110/zoomx-vaporfly-next-2-yol-yarış-ayakkabısı-dxSLFw.png",
      New: false,
      Title: "Nike ZoomX Vaporfly Next% 2",
      Desc: "Erkek Yol Yarış Ayakkabısı",
      Color: "5 Renk",
      Price: "3.629,90",
    },
    {
      Id: 5,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/air-max-plus-ayakkabısı-nnTrAZe0.png",
      New: true,
      Title: "Nike Air Max Plus",
      Desc: "Erkek Ayakkabısı",
      Color: "2 Renk",
      Price: "2.469,90",
    },
    {
      Id: 6,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8992c10-41af-4da9-b2b7-2799e74a095d/blazer-mid-77-jumbo-ayakkabısı-g1NlvJ.png",
      New: false,
      Title: "Nike Blazer Mid '77 Jumbo",
      Desc: "Erkek Ayakkabısı",
      Color: "3 Renk",
      Price: "1.599,90",
    },
  ];
  return (
    <>
      <CustomSlider heading={"COUSTOMIZABLE JURSSEY"} options={options} />
      <CustomSlider heading={"FOOTBALL TEAMS JURSSEY"} options={data} />
    </>
  );
};

export default Customize;
