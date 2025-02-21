import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FaUpload, FaFile, FaDownload } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import DynamicText from "../DynamicText";

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
        <div className="w-full">
          {/* Label */}

          <label className="block font-semibold mb-2 text-black">{label}</label>

          {/* Upload Mode */}
          {mode === "upload" ? (
            <label
              htmlFor={`file-upload-${name}`}
              className="flex items-center justify-between border border-primary p-2 rounded-lg w-full bg-white shadow-sm cursor-pointer hover:border-primary-dark transition"
            >
              {/* Hidden File Input */}
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

              {/* Icon - Left (Changes based on file selection) */}
              {selectedFile ? (
                <FaFile className="text-primary text-lg" />
              ) : (
                <FaUpload className="text-primary text-lg" />
              )}

              {/* File Name or Select File - Center */}
              <DynamicText
                text={selectedFile ? selectedFile.name : "Select a file"}
                className="text-primary font-semibold flex-1 text-center"
              />

              {/* Remove File Button (X) - Right */}
              {selectedFile && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                    onChange(null);
                  }}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <CgClose />
                </button>
              )}
            </label>
          ) : (
            // Download Mode
            <div className="flex items-center border border-primary p-2 rounded-lg w-full bg-white shadow-sm">
              {/* Icon - Left */}
              <FaDownload className="text-primary text-lg mr-2" />

              {/* File Name - Center */}
              {fileUrl ? (
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full"
                >
                  <DynamicText
                    text={"Download File"}
                    className="text-primary flex-1 text-center font-semibold"
                  />
                </a>
              ) : (
                <DynamicText
                  text={"No file available"}
                  className="text-gray-500 flex-1 text-center"
                />
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default CustomFileInput;
