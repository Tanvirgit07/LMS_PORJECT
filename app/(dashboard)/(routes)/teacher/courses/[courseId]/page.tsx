// import { db } from "@/lib/db";
// import { redirect } from "next/navigation";

// const CourseIdPage = ({
//     params 
// }: {
//     params : {courseId: string}
// }) => {

//     // const {userId} = auth()
//     // if(!userId){
//     //     return redirect("/");
//     // }

//     const course = await db.course.findUnique({
//         where: {
//             id: params: courseId
//         }
//     })

//     if(!course){
//         return redirect("/");
//     }


//     const requiredFields = {
//         course: title,
//         course: Description,
//         course: imageUrl,
//         course: price,
//         course: categoryId
//     };

//     const totalFields = requiredFields.length;
//     const completedFields = requiredFields.filter(Boolean).length;

//     const completionText = `${completedFields} / ${totalFields}`
    
//     return (
//         <div>
//             Course id : {params.courseId}
//         </div>
//     );
// };

// export default CourseIdPage;



import { IconBadge } from "@/Components/icon-badge";
import { db } from "@/lib/db";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";

// async function করতে হবে
const CourseIdPage = async ({
  params,
}: {
  params: { courseId: string };
}) => {
  // courseId বের করা
  const course = await db.course.findUnique({
    where: {
      id: params.courseId, // এখানে params.courseId ব্যবহার করুন
    },
  });

  if (!course) {
    return redirect("/"); // যদি course না থাকে, রিডাইরেক্ট
  }

  // requiredFields ভুলভাবে ব্যবহার করা হয়েছে, এটি একটি অবজেক্ট নয়, এটা অ্যারে হওয়া উচিত
  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">
                Course Setup
            </h1>
            <span className="text-sm text-slate-700">
                Complete all fields {completionText}
            </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div>
                <div className="flex items-center gap-x-2">
                    <IconBadge icon={LayoutDashboard} />
                    <h2 className="text-xl">
                        Customize your course
                    </h2>
                </div>
                <TitleForm initialData={course} courseId = {course.id}/>
            </div>
      </div>
    </div>
  );
};

export default CourseIdPage;


