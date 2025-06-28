import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { X } from "react-bootstrap-icons";

function ConfirmationPopup({
  isOpen,
  onClose,
  title = "Are you sure?",
  subheading = "This action cannot be undone.",
  confirmText = "Yes, Delete",
  onConfirm,
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="confirmation-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      {/* Content */}
      <DialogContent dividers sx={{ textAlign: "center" }}>
        <div className="flex justify-between">
          <Typography variant="h6" color="text.secondary">
            {subheading}
          </Typography>
          <X width={24} height={24} className="cursor-pointer" onClick={onClose} />
        </div>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ justifyContent: "flex-end", p: 2 }}>
        <Button onClick={onClose} variant="outlined" color="inherit">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationPopup;
