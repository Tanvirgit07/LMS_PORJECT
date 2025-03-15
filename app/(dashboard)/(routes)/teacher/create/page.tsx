// "use client"
// import * as z from "zod";
// import axios from "axios";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {useFrom} from "react-hook-form";
// import { useRouter } from "next/router";

// import {
//     From,
//     FromControl,
//     FormDescription,
//     FormField,
//     FormLabel,
//     FormMessage
// } from "@/Components/ui/form";

// import {Button} from "@/Components/ui/button";
// import {input} from "@/Components/ui/input";
// import { Resolver } from "dns/promises";
// import { title } from "process";


// const formSchema = z.object({
//     title: z.string().min(1,{
//         message : "Title is required",
//     })
// })


// const CreatePage = () => {
//     cosnt form = useFrom<z.infer<typeof formSchema>({
//         Resolver: zodResolver(formSchema),
//         defaultValues : {
//             title: ""
//         }
//     })

//     const {isSubmitting, isValid} = form.formstate;
//     return (
//         <div>
//             create page
//         </div>
//     );
// };

// export default CreatePage;