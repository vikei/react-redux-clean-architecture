import {Button} from "antd";
import React, {ReactNode, useCallback} from "react";
import {useHistory} from "react-router-dom";

interface BackButtonProps {
  label?: ReactNode;
}

export default function BackButton({label}: BackButtonProps) {
  const history = useHistory();
  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Button type="link" onClick={handleBack}>
      {label ?? "Back"}
    </Button>
  );
}
