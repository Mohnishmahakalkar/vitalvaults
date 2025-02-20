import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { CustomSelect, Option } from "../renderer/CustomSelect";
import CustomInput from "../renderer/CustomInput";
import CustomButton from "../renderer/CustomButton";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomFileInput from "./CustomFileInput";

export interface FieldConfig {
  name: string;
  label: string;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea"
    | "date"
    | "fileUpload"
    | "fileDownload";
  options?: Option[];
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  fileUrl?: string;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<any>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <Controller
            name={field.name}
            control={control}
            render={({}) => {
              switch (field.type) {
                case "text":
                case "password":
                case "email":
                case "number":
                case "date":
                case "textarea":
                  return (
                    <CustomInput
                      control={control}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      placeholder={
                        field.placeholder ||
                        `Enter ${field.label.toLowerCase()}`
                      }
                      rules={{
                        required: field.required
                          ? `${field.label} is required*`
                          : false,
                        minLength: field.minLength
                          ? {
                              value: field.minLength,
                              message: `${field.label} must be at least ${field.minLength} characters*`,
                            }
                          : undefined,
                        maxLength: field.maxLength
                          ? {
                              value: field.maxLength,
                              message: `${field.label} cannot exceed ${field.maxLength} characters*`,
                            }
                          : undefined,
                      }}
                    />
                  );

                case "select":
                  return (
                    <CustomSelect
                      control={control}
                      label={field.label}
                      name={field.name}
                      options={field.options || []}
                      rules={{
                        required: field.required
                          ? `${field.label} is required*`
                          : false,
                      }}
                    />
                  );

                case "checkbox":
                  return (
                    <CustomCheckbox
                      label={field.label}
                      name={field.name}
                      control={control}
                      rules={{
                        required: field.required
                          ? `${field.label} is required*`
                          : false,
                      }}
                    />
                  );

                case "radio":
                  return (
                    <CustomRadioGroup
                      label={field.label}
                      name={field.name}
                      control={control}
                      options={field.options || []}
                      rules={{
                        required: field.required
                          ? `Select ${field.label}*`
                          : false,
                      }}
                    />
                  );

                case "fileUpload":
                  return (
                    <CustomFileInput
                      label={field.label}
                      name={field.name}
                      control={control}
                      mode="upload"
                      rules={{
                        required: field.required
                          ? `Select ${field.label}*`
                          : false,
                      }}
                    />
                  );

                case "fileDownload":
                  return (
                    <CustomFileInput
                      label={field.label}
                      name={field.name}
                      control={control}
                      mode="download"
                      fileUrl={field.fileUrl}
                    />
                  );

                default:
                  return <>Component Not Found</>;
              }
            }}
          />
        </div>
      ))}

      <CustomButton
        label="Submit"
        type="normal"
        isSubmit
        className="w-full rounded-full"
      />
    </form>
  );
};

export default DynamicForm;
