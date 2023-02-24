import React, { useState } from "react";
import { Button, Input, AddButton } from "view/Home/components/styles";

interface NavBarProps {
  openModal: () => void;
}

export default function NavBar({openModal}: NavBarProps): React.ReactElement {
  const [input, setInput] = useState("");

  const onChange = (e: any) => {
    e.preventDefault();
    setInput(e.target?.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <AddButton onClick={openModal}>+</AddButton>
      <Input value={input} onChange={onChange} placeholder="Search a book" />
      <Button onClick={onSubmit}>Search</Button>
    </div>
  );
}
