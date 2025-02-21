import { RootState } from "../redux/store";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import { useSelector } from "react-redux";

const Demo = () => {
  const fields: FieldConfig[] = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      minLength: 6,
      placeholder: "Enter a secure password",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "phone",
      required: true,
      placeholder: "Enter your phone number",
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      required: true,
      placeholder: "Enter your age",
    },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    {
      name: "bio",
      label: "Short Bio",
      type: "textarea",
      required: false,
      placeholder: "Tell us about yourself",
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
     {
      name: "skills",
      label: "Your Skills",
      type: "checkbox",
      required: true,
      options: [
        { value: "coding", label: "Coding" },
        { value: "design", label: "Design" },
        { value: "marketing", label: "Marketing" },
        { value: "writing", label: "Writing" },
      ],
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      options: [
        { value: "usa", label: "USA" },
        { value: "canada", label: "Canada" },
        { value: "uk", label: "UK" },
      ],
      placeholder: "Select your country",
    },
    {
      name: "profilePic",
      label: "Profile Picture",
      type: "fileUpload",
      required: true,
    },
    {
      name: "downloadableFile",
      label: "Download File",
      type: "fileDownload",
      fileUrl: "https://example.com/sample.pdf",
    },
  ];

  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (isLoading) return null;

  return (
    <>
      <div className="flex flex-row p-2 bg-white w-full">
        <DynamicForm
          fields={fields}
          onSubmit={(data) => {console.log(data,"debug:bchdsbjcd")}}
          layout="row"
          buttonsConfig={{
            showSubmit: true,
            showCancel: true,
            showReset: true,
            onCancel: () => console.log("Cancelled"),
          }}
        />
      </div>
    </>
  );
};

export default Demo;
