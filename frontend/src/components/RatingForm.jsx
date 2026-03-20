import React, { useState } from 'react'; // Importerar React och useState-hooken för att hantera komponentens state
import { Rating } from '@mui/material'; // Importerar Material-UI Rating-komponent för stjärnbetyg
import { Button, Form } from 'react-bootstrap'; // Importerar Bootstrap Button och Form-komponenter

// RatingForm-komponent tar emot en onSubmit-funktion som prop
const RatingForm = ({ onSubmit }) => {
  // State för betyg (1-5) och kommentar (valfri text)
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Funktion som körs när användaren trycker på Submit-knappen
  const handleSubmit = () => {
    // Skickar upp rating och kommentar till föräldrakomponenten via onSubmit
    onSubmit({ rating, comment });
    // Nollställer formuläret efter skick
    setRating(0);
    setComment('');
  };

  return (
    <div className="mb-3">
      <h4>Rate this product:</h4>

      {/* Material-UI Rating-komponent */}
      <Rating
        value={rating} // Visar aktuell rating
        onChange={(e, newValue) => setRating(newValue)} // Uppdaterar state när användaren ändrar betyget
      />

      {/* Kommentarfält */}
      <Form.Group controlId="comment" className="mt-2">
        <Form.Label>Comment (optional)</Form.Label>
        <Form.Control
          as="textarea" // Textarea för kommentar
          rows={2}
          value={comment} // Bindning till state
          onChange={(e) => setComment(e.target.value)} // Uppdaterar state vid textändring
        />
      </Form.Group>

      {/* Submit-knapp */}
      <Button variant="primary" className="mt-2" onClick={handleSubmit}>
        Submit Rating
      </Button>
    </div>
  );
};

export default RatingForm; // Exporterar komponenten för att användas i andra filer