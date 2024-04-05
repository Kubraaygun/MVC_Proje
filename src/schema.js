//yup'taki butun fonksiyonlari import etme
import * as yup from "yup";

//1 buyuk hard
//1 kucuk harf
//1 sayi
//1 ozel karakter
//min 5 karakter

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//Validasyon semasi
//formdaki inputlarin gecerli olmasi icin
//gerekli kosullari tanimladigimiz yapi

//bir input alaninin zorunluluklarini belirtirken ilk cagrilmasi
// gereken fonksiyonun veri tipi olmali
export const schema = yup.object().shape({
  //email zorunluluklari belirle
  email: yup
    .string()
    .email("Geçerli bir mail formatı giriniz")
    .required("Zorunlu Alan"),

  //yas icin zorunluluklari belirle
  age: yup
    .number()
    .min(18, "Yaşınız 18'den küçük olamaz")
    .max(100, "Yaşınız 100'den büyük olamaz")
    .integer("Yaşınız tam sayı olmalı")
    .required("Zorunlu Alan"),

  //Sifre alani icin zorunluluklar
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
  //sifre regexdeki kurallara uygun mu kontrol eder
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Zorunlu Alan"),


    //sifre onay zorunluluklar
    confirmPassword:yup
    .string()
//oneOf inputtaki veri verdigimiz dizideki verilerden
//birileriyle eslesiyor mu kontrol eder
//yup.ref input alanlarindaki  verilere erismeye yarar
    .oneOf([yup.ref('password')], "Onay şifreniz doğru değil")
    .required('Zorunlu Alan')

});
