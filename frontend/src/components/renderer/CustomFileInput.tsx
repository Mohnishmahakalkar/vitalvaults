import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FaUpload, FaTrash, FaDownload } from "react-icons/fa";

interface CustomFileInputProps {
  label: string;
  name: string;
  control: any;
  mode?: "upload" | "download";
  fileUrl?: string;
  rules?: object;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  label,
  name,
  control,
  mode = "upload",
  fileUrl,
  rules,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, ref }, fieldState: { error } }) => (
        <div>
          <label className="block text-base font-semibold mb-1">{label}</label>
          {mode === "upload" ? (
            <div className="flex items-center gap-2 border p-2 rounded-md w-full">
              <input
                type="file"
                ref={ref}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setSelectedFile(file);
                  onChange(file);
                }}
                className="hidden"
                id={`file-upload-${name}`}
              />
              <label
                htmlFor={`file-upload-${name}`}
                className="flex items-center gap-2 cursor-pointer text-blue-600"
              >
                <FaUpload />{" "}
                {selectedFile ? selectedFile.name : "Choose a file"}
              </label>
              {selectedFile && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFile(null);
                    onChange(null);
                  }}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 border p-2 rounded-md w-full">
              {fileUrl ? (
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 flex items-center gap-2"
                >
                  <FaDownload /> Download File
                </a>
              ) : (
                <span className="text-gray-500">No file available</span>
              )}
            </div>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default CustomFileInput;
