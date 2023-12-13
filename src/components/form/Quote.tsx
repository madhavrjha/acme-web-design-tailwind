import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const QuoteFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "I don't like short names! ATLEAST 3 CHARS 🤦" })
    .max(20, { message: "Isn't is too long, NO MORE THAN 20 CHARS 🤦‍♀️" }),
  email: z
    .string()
    .min(1, { message: "we can't read your mind Dear! You have to Type 🤔" })
    .email({ message: "What are you doing dear! Make this email correct 😒" }),
  message: z
    .string()
    .min(3, { message: "I can't see your words, isn't it too small 👀" })
    .max(300, { message: "FUNFACT: We don't read long messages 🤢" }),
});

type QuoteFormSchemaType = z.infer<typeof QuoteFormSchema>;

const Quote = () => {
  const { register, formState, handleSubmit } = useForm<QuoteFormSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(QuoteFormSchema),
  });

  const onSubmit = (data: QuoteFormSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-2 py-4"
    >
      <div>
        <label className="block pb-1">Name:</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter Name"
          className="w-full rounded-sm border-chinese-silver px-2 py-1 font-serif text-sm text-charcoal outline-none"
        />
        {formState.errors.name && (
          <p className="mt-1 text-sm text-flame">
            {formState.errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label className="block pb-1">Email:</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter Email"
          className="w-full rounded-sm border-chinese-silver px-2 py-1 font-serif text-sm text-charcoal outline-none"
        />
        {formState.errors.email && (
          <p className="mt-1 text-sm text-flame">
            {formState.errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label className="block pb-1">Message:</label>
        <textarea
          placeholder="Enter Message"
          {...register("message")}
          className="min-h-[50px] w-full rounded-sm border-chinese-silver px-2 py-1 font-serif text-sm text-charcoal outline-none"
        ></textarea>
        {formState.errors.message && (
          <p className="mt-1 text-sm text-flame">
            {formState.errors.message.message}
          </p>
        )}
      </div>
      <div>
        <button type="submit" className="rounded-sm bg-flame px-5 py-2 text-sm">
          Send
        </button>
      </div>
    </form>
  );
};

export default Quote;
