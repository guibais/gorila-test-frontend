import DefaultForm, { IDefaultFormProps } from "../organisms/defaultForm";

import React from "react";
import styled from "styled-components";

const AuthStyle = styled.div`
  height: 100vh;
  div {
    align-content: center;
    justify-content: center;
  }
`;

export type IAuthTemplateProps = {
  form: IDefaultFormProps;
};

const AuthTemplate = (props: IAuthTemplateProps) => (
  <AuthStyle className="container">
    <div className="row my-auto h-100">
      <div className="col-md-4">
        <DefaultForm {...props.form} />
      </div>
    </div>
  </AuthStyle>
);

export default AuthTemplate;
