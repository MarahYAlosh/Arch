import React from "react";
import { MainHeader } from "../components/MainHeader";
import { Box, Typography } from "@mui/material";
import {
  containerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "../components/styles/SectionTwoStyle";
import { SectionService } from "../components/SectionService";
import pic1 from "../assets/images/service1.jpg";
import pic2 from "../assets/images/service2.jpg";
import pic3 from "../assets/images/service3.jpg";
import pic4 from "../assets/images/service4.jpg";
import { Header } from "../components/Header";
export const Services = () => {
  return (
    <>
      <Header />
      <MainHeader text=" الخدمات" />
      <Box sx={containerStyle}>
        <Box sx={titleWrapperStyle}>
          <Box sx={titleBoxStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
              الخدمات
            </Typography>

            <Box sx={underlineStyle} />
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "center",
              p: 2,
              width: { xs: "90%", sm: "68%", md: "52%" },
            }}
          >
            نحن فريق من المهندسين المعماريين المبدعين والمتحمسين، نكرس جهودنا
            لتحقيق أحلام عملائنا من خلال تصميمات فريدة ومبتكرة، حيث ندمج بين
            الفن والوظيفة لنخلق مساحات تلبي تطلعاتهم وتعكس هويتهم
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "90px" }}>
          <SectionService
            title="تشطيب الشقة"
            text="تشطيب الشقة هو عملية تحويل المساحة الداخلية إلى مكان جاهز للسكن، تتضمن مجموعة من الأعمال التفصيلية لتحسين المظهر والوظيفة. نبدأ بتصميم داخلي يلبي احتياجات العميل ويعكس أسلوبه الشخصي، ثم نقوم بتركيب الأرضيات المناسبة، ومعالجة الجدران بألوان ومواد ديكور تضيف لمسة جمالية. تشمل الخدمة أيضًا تصميم الأسقف، وتجهيز الحمامات والمطابخ بالأدوات الصحية والأجهزة الكهربائية، بالإضافة إلى تنفيذ التمديدات الكهربائية والسباكة بشكل احترافي. هدفنا هو تقديم خدمة شاملة تلبي توقعات العملاء مع الالتزام بالجودة والاحترافية في كل خطوة."
            img={pic1}
            direction="rtl"
          />

          <SectionService
            title="التصميم الداخلي "
            text=" خدمة التصميم الداخلي تهدف إلى خلق بيئات مريحة وجمالية تعكس شخصية العميل وتلبي احتياجاته. يبدأ العمل بفهم متطلبات العميل ورؤيته، ثم يتم وضع خطة تصميم شاملة تشمل اختيار الألوان، الأثاث، والإضاءة. نركز على تحقيق توازن بين الجمال والوظيفة، مما يعزز من تجربة السكن. بالإضافة إلى ذلك، نستخدم مواد عالية الجودة تضفي لمسة من الأناقة والراحة. هدفنا هو تحويل المساحات إلى أماكن تعبر عن الهوية وتعزز جودة الحياة "
            img={pic2}
            direction="ltr"
          />

          <SectionService
            title="شراء / بيع / استئجار العقارات "
            text=" خدمة شراء، بيع، واستئجار العقارات تهدف إلى تسهيل العمليات العقارية للعملاء، سواء كانوا مستثمرين أو أفراد. نقدم استشارات متخصصة لمساعدتهم في اتخاذ قرارات مستنيرة تتناسب مع احتياجاتهم وميزانياتهم. تشمل الخدمة تقييم العقارات، والتسويق الفعّال، والتنظيم القانوني للصفقات. نعمل على توفير تجربة سلسة وآمنة، مع ضمان الشفافية في جميع الإجراءات. هدفنا هو تحقيق أفضل النتائج للعملاء وتعزيز ثقتهم في السوق العقارية. "
            img={pic3}
            direction="rtl"
          />

          <SectionService
            title="إدارة المشاريع السكنية "
            text="خدمة إدارة المشاريع السكنية تتضمن تنسيق كافة جوانب تطوير المشاريع السكنية لضمان تحقيق الأهداف المحددة ضمن الميزانية والجدول الزمني. تشمل هذه الخدمة تخطيط المشروع، وتحديد الموارد اللازمة، وتوظيف الفرق المناسبة من المقاولين والعمالة. نحن نتابع تقدم العمل بشكل دوري، ونتأكد من الالتزام بالمعايير الهندسية والفنية المطلوبة. كما نعمل على التواصل المستمر مع جميع الأطراف المعنية، بما في ذلك العملاء والمستثمرين،  "
            img={pic4}
            direction="ltr"
          />
        </Box>
      </Box>
    </>
  );
};
