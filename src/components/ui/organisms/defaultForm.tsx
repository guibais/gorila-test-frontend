import * as React from "react";
import Title, { ITitleProps } from "../atoms/Title";
import BasicButton, { IBasicButtonProps } from "../atoms/BasicButton";
import InputFormGroup, {
  IInputFormGroupProps,
} from "../molecules/inputFormGroup";

export type IDefaultFormProps = {
  title: ITitleProps;
  defaultForm: IInputFormGroupProps[];
  basicButton: IBasicButtonProps;
  infoButton?: IBasicButtonProps;
};

function DefaultForm(props: IDefaultFormProps): React.ReactElement {
  return (
    <>
      <Title {...props.title} />
      <form>
        {props.defaultForm.map((form, i) => (
          <InputFormGroup key={i} {...form} />
        ))}
        <BasicButton isOutlined {...props.infoButton} />
        <BasicButton {...props.basicButton} className="w-100 my-2" />
      </form>
    </>
  );
}

export default DefaultForm;
