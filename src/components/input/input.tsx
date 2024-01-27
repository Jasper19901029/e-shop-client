import { ReactNode, ChangeEvent, ComponentProps } from "react";
import clsx from "clsx";

export type InputProps = ComponentProps<"input"> & {
  label: string;
  htmlFor: string;
};

export default function Input({ ...rest }: InputProps): ReactNode {
  if (rest.type === "radio") {
    return (
      <>
        <input {...rest} className="mx-4" />
        <label htmlFor={rest.htmlFor}>{rest.label}</label>
      </>
    );
  }
  return (
    <div className="">
      <label className="mr-4 w-[100px] inline-block" htmlFor={rest.htmlFor}>
        {rest.label}:
      </label>
      <input
        {...rest}
        className={clsx(
          rest.className ? rest.className : "",
          "appearance-none border-2 border-slider border-black rounded-[4px] focus:outline-none focus:border-blue-500 w-[218px]"
        )}
      />
    </div>
  );
}
