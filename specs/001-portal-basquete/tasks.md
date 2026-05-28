# Tasks: Portal Basquete

**Input**: Design documents from `/specs/001-portal-basquete/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic static site structure

- [ ] T001 Create `index.html` with the base HTML5 page structure and semantic layout
- [ ] T002 Create `styles.css` with CSS custom properties, responsive layout scaffolding, and theme variable placeholders
- [ ] T003 Create `script.js` with the skeleton for theme toggling and Local Storage form handling
- [ ] T004 [P] Create `assets/logo.png` as a lightweight cartoon-style basketball logo with a court background
- [ ] T005 [P] Add responsive viewport metadata and site metadata to `index.html`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build core page structure, theme system, responsive behavior, and accessibility support

- [ ] T006 Implement the top banner and horizontal navigation menu in `index.html`
- [ ] T007 Implement the footer with institutional contact details in `index.html`
- [ ] T008 [P] Add semantic section scaffolding for Quem Somos, História, Categorias, Campeonatos, Títulos Conquistados, Notícias, Links para redes, Contatos, and Inscrição in `index.html`
- [ ] T009 [P] Implement light theme and dark theme CSS variables in `styles.css`, with white as the dominant light background and navy blue as the dominant dark background
- [ ] T010 [P] Implement responsive layout rules in `styles.css` for mobile, tablet, and desktop viewports
- [ ] T011 [P] Implement the theme toggle button and persistent theme state in `script.js`
- [ ] T012 [P] Ensure the portal remains readable with JavaScript disabled by using semantic HTML and content-first structure in `index.html`

---

## Phase 3: User Story 1 - Visitar portal informativo (Priority: P1)

**Goal**: Provide a complete and readable homepage with the required informational sections.

**Independent Test**: Open `index.html` on desktop and mobile and verify the expected sections are visible, navigable from the menu, and readable without horizontal scrolling.

- [ ] T013 [US1] Populate the Quem Somos section with association identity content in `index.html`
- [ ] T014 [US1] Populate the História section with the club’s history content in `index.html`
- [ ] T015 [US1] Populate the Categorias section with team category information in `index.html`
- [ ] T016 [US1] Populate the Notícias section with at least three news items and summaries in `index.html`
- [ ] T017 [US1] Add responsive content styling for informational sections in `styles.css`

---

## Phase 4: User Story 4 - Enviar inscrição de atleta (Priority: P1)

**Goal**: Implement the athlete registration form with validation and Local Storage persistence.

**Independent Test**: Complete and submit the athlete registration form and verify that inline validation appears and form data is stored in browser Local Storage.

- [ ] T018 [US4] Add athlete registration fields to the Inscrição section in `index.html` (Nome, Sobrenome, Endereço, Telefone de Contato, Email, Instagram, Facebook, TikTok, Sobre você)
- [ ] T019 [US4] Implement client-side form validation logic in `script.js`
- [ ] T020 [US4] Implement Local Storage persistence and submission feedback for the registration form in `script.js`
- [ ] T021 [US4] Style the athlete registration form and validation messages in `styles.css`

---

## Phase 5: User Story 2 - Conferir títulos e campeonatos (Priority: P2)

**Goal**: Present the association’s competitive participation and titles clearly and attractively.

**Independent Test**: Review the Campeonatos and Títulos Conquistados sections to confirm they describe competitions and achievements clearly.

- [ ] T022 [US2] Add Campeonatos content to `index.html` describing leagues and competitions
- [ ] T023 [US2] Add Títulos Conquistados content to `index.html` listing recent and historical titles
- [ ] T024 [US2] Style the Campeonatos and Títulos Conquistados sections for visual hierarchy and responsiveness in `styles.css`
- [ ] T025 [US2] Ensure titles and championships display clearly on mobile and desktop in `index.html` and `styles.css`

---

## Phase 6: User Story 3 - Encontrar informações de contato e redes sociais (Priority: P2)

**Goal**: Provide clear contact details and social link access for supporters and athletes.

**Independent Test**: Locate the Contatos and Links para redes sections and verify that links open correctly and contact details are easy to read.

- [ ] T026 [US3] Add Contatos section content with email, phone, and institutional address in `index.html`
- [ ] T027 [US3] Add Links para redes section with social anchors and accessible link labels in `index.html`
- [ ] T028 [US3] Style the contact and social link sections for readability and responsive layout in `styles.css`
- [ ] T029 [US3] Ensure footer contact information is accessible and visible in `index.html`

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Final quality checks, documentation, and asset optimization.

- [ ] T030 [P] Verify light and dark theme contrast, menu behavior, and responsive breakpoints in `index.html` and `styles.css`
- [ ] T031 [P] Optimize `assets/logo.png` and any images for lightweight delivery
- [ ] T032 [P] Review and update `specs/001-portal-basquete/quickstart.md` and `specs/001-portal-basquete/data-model.md` for consistency with the final implementation
- [ ] T033 [P] Validate the Local Storage registration schema against `specs/001-portal-basquete/contracts/local-storage-registration-schema.md`
- [ ] T034 [P] Clean up HTML, CSS, and JavaScript comments and remove any placeholder content from `index.html`, `styles.css`, and `script.js`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - begins immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS user stories
- **User Stories (Phase 3+)**: All depend on Foundational completion
- **Final Phase**: Depends on all user stories being completed

### User Story Dependencies

- **User Story 1 (P1)**: Requires the foundational layout and section scaffolding from Phase 2
- **User Story 4 (P1)**: Requires form scaffolding and script support from Phase 2
- **User Story 2 (P2)**: Requires foundational section scaffolding and responsive styling
- **User Story 3 (P2)**: Requires foundational section scaffolding and responsive styling

### Parallel Opportunities

- `T004`, `T005`, `T009`, `T010`, `T011`, and `T012` are parallelizable foundational tasks
- `T013`, `T014`, `T015`, `T016`, and `T017` can be worked in parallel within User Story 1
- `T018`, `T019`, `T020`, and `T021` can be worked in parallel within User Story 4
- `T022`, `T023`, `T024`, and `T025` can be worked in parallel within User Story 2
- `T026`, `T027`, `T028`, and `T029` can be worked in parallel within User Story 3

## Parallel Example: User Story 4

- Task: `T018 [US4] Add athlete registration fields to the Inscrição section in index.html`
- Task: `T019 [US4] Implement client-side form validation logic in script.js`
- Task: `T020 [US4] Implement Local Storage persistence and submission feedback for the registration form in script.js`
- Task: `T021 [US4] Style the athlete registration form and validation messages in styles.css`

## Implementation Strategy

### MVP First

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Deliver User Story 1 and User Story 4 as the first MVP slice
4. Validate independent functionality for informational content and registration form
5. Add User Story 2 and User Story 3 content afterward

### Incremental Delivery

1. Build shared layout and theme infrastructure
2. Add the homepage informational sections and form functionality
3. Add achievements content and contact/social details
4. Polish theme, accessibility, and performance last
