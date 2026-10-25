import pool from "../config/db.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, contact, message } = req.body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof contact !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Remove unnecessary whitespace
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanContact = contact.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanSubject ||
      !cleanContact ||
      !cleanMessage
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Validate field lengths
    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name cannot exceed 100 characters.",
      });
    }

    if (cleanEmail.length > 255) {
      return res.status(400).json({
        success: false,
        message: "Email cannot exceed 255 characters.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (cleanSubject.length > 150 || cleanContact.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Subject or contact information is too long.",
      });
    }

    // Insert data into PostgreSQL
    const query = `
      INSERT INTO contacts
        (name, email, subject, contact, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, email, subject, contact, created_at
    `;

    const values = [
      cleanName,
      cleanEmail,
      cleanSubject,
      cleanContact,
      cleanMessage,
    ];

    const result = await pool.query(query, values);

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Create contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your message. Please try again later.",
    });
  }
};