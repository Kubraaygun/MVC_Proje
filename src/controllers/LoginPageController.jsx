import { useFormik } from "formik";
import { schema } from "../schema";
import LoginPageView from "../views/LoginPageView";

const LoginPageController = () => {
      //Formik'in butun ozelliklerini kullanmamizi saglayan hook
  const formik = useFormik({
    //formda tutulacak verilerin ilk degeri
    initialValues: {
      email: "",
      age: "",
      password:"",
      confirmPassword:"",
    },

    //Validasyon semasi
    //inputlardaki verileri semada kosullara uygun mu
    //kontrol edicek gecerli degilse error stateinde //hatalari tutar
    validationSchema: schema,

    //form gonderilince calisacak olan fonksiyon
    //otomatik olarak sayfa yenilemeyi engeller
    //1-parametre olarak formdaki verileri alir
    //2-formda calistirabilecegimiz aksiyonlari alir

    onSubmit: (values, actions) => {
      console.log(actions);
    },
  });
  return (
  <LoginPageView formik={formik}/>
  )
}

export default LoginPageController
