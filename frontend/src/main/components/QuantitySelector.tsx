import { Box, IconButton, InputBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove"; 

interface QuantitySelectorProps {
  value: number;
  onClick: (value: number) => void;
  maxValue?: number;
}

export const QuantitySelector = (props: QuantitySelectorProps) => {
  const { value: quantity, onClick: setQuantity, maxValue } = props;

  return (
    <Box
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{ p: "10px" }}
        aria-label="menu"
        onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
      >
        <RemoveIcon color='error' />
      </IconButton>
      <InputBase
        value={quantity}
        inputProps={{ min: 1, max: maxValue, readOnly: true}}
        placeholder="1"
        sx={{ml: 2}}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() =>
          setQuantity(quantity === maxValue ? quantity : quantity + 1)
        }
      >
        <AddIcon color='success'/>
      </IconButton>
    </Box>
  );
};
