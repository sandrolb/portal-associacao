# Contract: Local Storage Athlete Registration Schema

## Purpose
Define the data shape persisted in browser Local Storage for athlete registration submissions.

## Storage Key
- `basketballClubAthleteSubmissions`

## Schema
```json
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "address": "string",
  "phone": "string",
  "email": "string",
  "instagram": "string",
  "facebook": "string",
  "tiktok": "string",
  "about": "string",
  "submittedAt": "string"
}
```

## Notes
- The value stored under the key is an array of submission objects.
- Optional fields may be empty strings if the athlete chooses not to provide them.
- `submittedAt` should be an ISO 8601 timestamp.
- Validation rules and field labels are enforced by the front-end form logic.
