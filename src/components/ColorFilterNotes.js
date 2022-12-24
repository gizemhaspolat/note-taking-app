import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useDispatch } from "react-redux";
import { useState } from "react";

import { filterNote } from "../redux/notes/notesSlice";

import { colors } from "./InputArea";

const FilterMenu = () => {
  const [pickedColor, setPickedColor] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    setPickedColor(e.target.value);
    dispatch(filterNote(e.target.value));
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="blue"
        variant="outline"
        placeholder="Filter by color"
        value={colors}
        marginX={"10px"}
        size={"sm"}
      >
        {pickedColor ? pickedColor : "Filter by color"}
      </MenuButton>
      <MenuList>
        {colors.map((color) => (
          <MenuItem key={color} onClick={handleFilter} value={color}>
            {color}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
