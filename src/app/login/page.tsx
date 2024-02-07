import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { LoginForm } from "@/components/modules/LoginForm";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";

const Login = () => {
  return (
    <DefaultLayout>
      <ReduxProdiver>
        <section className="w-container flex min-h-screen flex-col items-center justify-center">
          <div className="mx-auto w-5/6 max-w-[400px]">
            <h2 className="text-3xl font-bold">Login</h2>
            <LoginForm />
          </div>
        </section>
      </ReduxProdiver>
    </DefaultLayout>
  );
};

export default Login;
