import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFLoginFormSchema } from "../../schema/RHFLoginForm.schema";
import type { RHFLoginFormValues } from "../../components/types/RHFLoginForm.types";

const RHFLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RHFLoginFormValues>({
    resolver: yupResolver(RHFLoginFormSchema),
  });

  const onSubmit: SubmitHandler<RHFLoginFormValues> = (data) => {
    console.log("Hook Form data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "300px", margin: "auto" }}
    >
      <div>
        <label>Email:</label>
        <input type="text" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>

      <button style={{ background: "orange" }} type="submit">
        Login
      </button>
    </form>
  );
};

export default RHFLoginForm;
