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
    | "phone"
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

interface ButtonConfig {
  showSubmit?: boolean;
  showCancel?: boolean;
  showReset?: boolean;
  onCancel?: () => void;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<any>;
  layout?: "row" | "column";
  buttonsConfig?: ButtonConfig;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  layout = "column",
  buttonsConfig = { showSubmit: true, showCancel: false, showReset: false },
}) => {
  const { handleSubmit, control, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex w-full gap-4 ${
        layout === "row" ? "flex-row flex-wrap" : "flex-col"
      }`}
    >
      {fields.map((field) => (
        <div key={field.name} className="max-w-md w-full">
          <Controller
            name={field.name}
            control={control}
            render={() => {
              switch (field.type) {
                case "text":
                case "password":
                case "email":
                case "number":
                case "date":
                case "textarea":
                case "phone":
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
                      options={field.options || []}
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

      {/* Button Section */}
      <div className="flex flex-row w-full gap-4 mt-10 justify-center">
        {buttonsConfig.showSubmit && (
          <CustomButton
            label="Submit"
            type="normal"
            isSubmit
            className="max-w-xs w-full"
          />
        )}
        {buttonsConfig.showReset && (
          <CustomButton
            label="Reset"
            type="reset"
            onClick={() => reset()}
            className="max-w-xs w-full"
          />
        )}
        {buttonsConfig.showCancel && buttonsConfig.onCancel && (
          <CustomButton
            label="Cancel"
            type="danger"
            onClick={buttonsConfig.onCancel}
            className="max-w-xs w-full"
          />
        )}
      </div>
    </form>
  );
};

export default DynamicForm;
