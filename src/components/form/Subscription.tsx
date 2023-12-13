import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SubscriptionSchema = z.object({
  email: z
    .string()
    .min(1, { message: "we can't read your mind Dear! You have to Type 🤔" })
    .email({ message: "What are you doing dear! Make this email correct 😒" }),
});

type SubscriptionSchemaType = z.infer<typeof SubscriptionSchema>;

const Subscription = () => {
  const { register, handleSubmit, formState } = useForm<SubscriptionSchemaType>(
    {
      defaultValues: { email: "" },
      resolver: zodResolver(SubscriptionSchema),
    },
  );

  const onSubmit = (data: SubscriptionSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col items-center justify-center gap-2 sm:w-auto sm:flex-row sm:items-start sm:gap-0"
    >
      <div className="flex w-full flex-col items-center gap-1">
        <input
          type="email"
          {...register("email")}
          placeholder="Enter Email"
          className="w-full max-w-[400px] px-2 py-1 text-sm outline-none sm:w-[250px]"
        />
        {formState.errors.email && (
          <p className="w-full max-w-[400px] text-left text-sm text-flame sm:w-[250px]">
            {formState.errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full max-w-[400px] bg-flame px-2 py-1 text-sm text-white sm:w-auto"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Subscription;
