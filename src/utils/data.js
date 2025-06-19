import sliderImage from "../assets/images/slider.jpg";
import serviceImage from "../assets/images/pic1.png";
import serviceImage2 from "../assets/images/pic2.png";
import projectImage from "../assets/images/proj.jpg";
import teamMemberImage1 from "../assets/images/teamMember1.jpg";
import teamMemberImage2 from "../assets/images/teamMember2.jpg";
import teamMemberImage3 from "../assets/images/teamMember3.jpg";
import works3 from "../assets/images/works3.jpg";
import works2 from "../assets/images/works2.jpg";
import works1 from "../assets/images/works1.jpg";

export const pagesHeader = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "خدماتنا", path: "/services" },
  { name: "أعمالنا", path: "/projects" },
  { name: "ملكيات", path: "/properties" },
];

export const Slides = [
  {
    image: sliderImage,
    title: "مرحبًا بكم في موقعنا",
    subtitle: "نقدم أفضل الحلول لعملك",
  },
  {
    image: sliderImage,
    title: "نحن نؤمن بالإبداع",
    subtitle: "دعنا نبني فكرتك معًا",
  },
  {
    image: sliderImage,
    title: "مشاريعنا تتحدث عنا",
    subtitle: "اطلع على بعض من أعمالنا المتميزة",
  },
];

export const servicesData = [
  {
    image: serviceImage,
    title: "البيع والشراء",
    description: "احتفل بتغير الفصول مع خدمات الديكور الخارجي الموسمية لدينا",
  },
  {
    image: serviceImage,
    title: "التصميم الداخلي",
    description: "نحو مساحات تعكس شخصيتك وتناسب ذوقك بأناقة واحترافية",
  },
  {
    image: serviceImage2,
    title: "التجديد والترميم",
    description: "نقدم حلول ترميم حديثة للحفاظ على جمالية وسلامة المكان",
  },
];

export const projects = [
  {
    id: 1,
    title: "مشروع 1",
    description: "قم بترقية مساحاتك",
    image: projectImage,
  },
  {
    id: 2,
    title: "مشروع 2",
    description: "قم بترقية مساحاتك",
    image: projectImage,
  },
  {
    id: 3,
    title: "مشروع 3",
    description: "قم بترقية مساحاتك",
    image: projectImage,
  },
];

export const properties = [
  {
    id: 1,
    image: sliderImage,
    title: "شقة سكايب بول",
    location: "1020 شارع بلومينجديل",
    price: 280000,
    beds: 4,
    baths: 2,
    area: 450,
  },
  {
    id: 2,
    image: sliderImage,
    title: "فيلا فاخرة",
    location: "شارع النخيل، دبي",
    price: 980000,
    beds: 5,
    baths: 4,
    area: 800,
  },
  {
    id: 3,
    image: sliderImage,
    title: "شقة عصرية",
    location: "شارع الاستقلال، بيروت",
    price: 350000,
    beds: 3,
    baths: 2,
    area: 400,
  },
];

export const teamMembers = [
  {
    id: 1,
    title: "اسم المهندس ",
    description: "اختصاص : التصميم المعماري ",
    image: teamMemberImage1,
  },
  {
    id: 2,
    title: "اسم المهندس ",
    description: "اختصاص : التصميم المعماري ",
    image: teamMemberImage2,
  },
  {
    id: 3,
    title: "اسم المهندس ",
    description: "اختصاص : التصميم المعماري ",
    image: teamMemberImage3,
  },
];

export const images = [
  { src: works1, alt: "Image 1" },
  { src: works3, alt: "Image 2" }, 
  { src: works2, alt: "Image 3" },
  { src: works1, alt: "Image 4" },
];
