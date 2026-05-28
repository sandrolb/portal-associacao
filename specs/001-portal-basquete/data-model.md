# Data Model: Portal Basquete

## Entities

### AthleteSubmission
Represents a prospective athlete who submits the registration form.

- `id` (string): Unique identifier for the submission
- `firstName` (string): Athlete’s given name
- `lastName` (string): Athlete’s family name
- `address` (string): Athlete’s mailing or residential address
- `phone` (string): Contact phone number
- `email` (string): Contact email address
- `instagram` (string): Optional Instagram profile URL
- `facebook` (string): Optional Facebook profile URL
- `tiktok` (string): Optional TikTok profile URL
- `about` (string): Narrative field describing sporting history and goals
- `submittedAt` (string): Timestamp of submission

### NewsItem
Represents a news headline displayed in the Notícias section.

- `title` (string): News headline
- `date` (string): Publication date
- `summary` (string): Short summary of the news item
- `link` (string, optional): External link for more details

### PortalSection
Represents a major content area of the portal.

- `id` (string): Section anchor identifier
- `title` (string): Section title
- `content` (string | array): Section content or list of items

## Relationships

- `AthleteSubmission` is stored in Local Storage and is independent of the portal content model.
- `NewsItem` entries are presented in the `Notícias` section and may be updated without changing portal structure.
- `PortalSection` supports the required content areas (Quem Somos, História, Categorias, Campeonatos, Títulos Conquistados, Notícias, Links para redes, Contatos, Inscrição).

## Validation rules

- Required fields: `firstName`, `lastName`, `phone`, `email`, `about`
- `email` must follow a valid email address format.
- `phone` must contain only digits, spaces, dashes, or plus signs.
- Social links must be valid URLs when provided.
- `about` must be non-empty and support multiline text.
