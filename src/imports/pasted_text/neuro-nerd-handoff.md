FINAL HANDOFF PREPARATION — NEURONERD ELDERLY PATIENT MOBILE APP

This is the FINAL design pass for the NeuroNERd patient application.

Do NOT redesign the application from scratch.
Do NOT replace the existing visual identity.
Do NOT remove or break any existing screens, navigation, games, or interactions.

The purpose of this final pass is to make the current design STRUCTURALLY COMPLETE and HANDOFF-READY for an autonomous engineering agent, Manus AI, which will later implement the actual cross-platform React Native + Expo mobile application.

IMPORTANT:
Figma is now the VISUAL AND STRUCTURAL SOURCE OF TRUTH.
Manus will handle the real application architecture, business logic, SQLite offline database, Supabase integration, synchronization, authentication, telemetry, adaptive difficulty, and native mobile implementation.

Do NOT attempt to implement the production backend in this final Figma pass.

==================================================
1. PRESERVE THE EXISTING DESIGN SYSTEM
==================================================

Keep the current NeuroNERd visual identity exactly as established.

Preserve:
• warm cream/off-white backgrounds
• natural green primary color
• muted earthy brown
• soft coral accent
• charcoal text
• rounded cards
• generous spacing
• Nunito-style highly readable body typography
• existing display typography
• large icons
• large touch targets
• calm, friendly, non-clinical visual language

Do not introduce a new color palette.

Do not introduce gradients unless they already exist in the current design.

Do not make the interface visually dense.

The application is designed primarily for elderly users, including users with cognitive difficulties and reduced vision or motor precision.

==================================================
2. FINALIZE THE MOBILE INFORMATION ARCHITECTURE
==================================================

Ensure the following primary navigation structure is clearly represented:

HOME
GAMES
MEMORIES
REMINDERS
PROFILE

The navigation must be visually consistent across the application.

Use clear icon + text labels.

Never rely on icons alone for important navigation.

==================================================
3. FINALIZE ALL CORE SCREENS
==================================================

Ensure the following major screens exist as clear, named mobile frames.

ONBOARDING / AUTH
• Splash
• Welcome
• Login

HOME
• Home dashboard
• Next reminder
• Quick access to games
• Quick access to memories
• Today's routine
• Voice assistance entry
• Offline state

GAMES
• Games catalogue
• Memory Match introduction
• Memory Match gameplay
• Memory Match pause
• Memory Match result
• Object Recall introduction
• Object Recall viewing phase
• Object Recall selection phase
• Object Recall result
• Pattern Sequence introduction
• Pattern Sequence gameplay
• Pattern Sequence result
• Game unavailable/error state
• Offline game state

MEMORIES
• Memories list
• Memory detail
• Empty memories state
• Memory unavailable/error state

REMINDERS
• Today's reminders
• Reminder detail
• Today's routine
• Reminder completed state
• Empty reminders state
• Offline reminders state

VOICE
• Voice assistant idle
• Listening state
• Processing state
• Response state
• Voice unavailable/error state

LANGUAGE
• Language selection
• Language selected state

PROFILE / SETTINGS
• Profile
• Accessibility settings
• Text size
• Sound/voice settings
• Notifications
• Language
• Help / caregiver assistance
• About NeuroNERd
• Sign out

==================================================
4. ADD THE CRITICAL OFFLINE-FIRST STATES
==================================================

The real application must work without continuous internet access.

Create clear visual states for:

• Online
• Offline
• Syncing
• Synced
• Sync failed
• Data saved locally
• Retry synchronization
• No internet connection

These must be calm and reassuring.

Example language:

"You're offline. Your activities are saved safely on this device."

"Your activities will sync when you're connected again."

"Saved on this device."

Avoid technical terminology such as:
• database
• API
• queue
• server
• network request
• backend error

The elderly user should never need to understand the synchronization architecture.

==================================================
5. MAKE GAME STATES EXPLICIT
==================================================

For every cognitive game, visually distinguish:

• Introduction
• Ready to begin
• Playing
• Correct answer
• Incorrect answer
• Progress
• Pause
• Resume
• Completed
• Result
• Saved offline
• Syncing result
• Error / retry

Do not use clinical terminology.

Never display:
• dementia score
• dementia severity
• diagnosis
• medical assessment
• cognitive impairment score
• clinical risk score

Results should describe GAME PERFORMANCE only.

Examples:

"Great job!"

"You remembered 4 out of 5."

"Let's try another one."

"Nice work today."

==================================================
6. ACCESSIBILITY MUST BE OBVIOUS IN THE DESIGN
==================================================

Treat accessibility as a first-class product requirement.

Ensure:

• large text
• high contrast
• large buttons
• large touch targets
• generous spacing
• minimal simultaneous choices
• clear visual hierarchy
• simple instructions
• icon + text wherever useful
• no tiny secondary controls
• no information communicated by color alone
• no essential interaction requiring precise gestures
• no dependence on timers
• no complex navigation patterns

Buttons should have obvious labels such as:

"Play"
"Start"
"Continue"
"Pause"
"Go Back"
"Try Again"
"Done"
"Listen"
"Speak"
"Remind Me"

Do not use ambiguous labels such as:
"Proceed"
"Execute"
"Submit"

==================================================
7. ADD ACCESSIBILITY VARIANTS
==================================================

Create representative variants for:

• Default text size
• Large text size
• High contrast mode

Do not create completely different designs.

Show how the same interface adapts while preserving the layout and hierarchy.

Clearly name these frames:

Accessibility / Default
Accessibility / Large Text
Accessibility / High Contrast

==================================================
8. COMPONENTIZE THE DESIGN
==================================================

Convert repeated visual patterns into reusable components where possible.

Important components should include:

• AppHeader
• BottomNavigation
• PrimaryButton
• SecondaryButton
• LargeActionButton
• IconButton
• ReminderCard
• MemoryCard
• GameCard
• ProgressIndicator
• ResultCard
• OfflineBanner
• SyncStatus
• EmptyState
• ErrorState
• ConfirmationDialog
• VoiceButton
• LanguageOption
• SettingsRow
• AccessibilityToggle

Use consistent component names.

Do not create dozens of unnecessary variations.

The goal is a clear component system that a developer can reproduce in React Native.

==================================================
9. NAME FRAMES AND COMPONENTS FOR ENGINEERING HANDOFF
==================================================

Use clear names rather than generic names such as:

Frame 1
Screen 2
Group 4
Rectangle 23

Prefer names like:

Screen/Home
Screen/Games
Screen/Game/MemoryMatch
Screen/Game/ObjectRecall
Screen/Game/PatternSequence
Screen/Memories
Screen/Reminders
Screen/Routine
Screen/VoiceAssistant
Screen/Language
Screen/Profile
Screen/Accessibility

For states:

State/Offline
State/Syncing
State/Synced
State/SyncFailed
State/Empty
State/Error
State/Loading

For components:

Component/GameCard
Component/ReminderCard
Component/PrimaryButton
Component/BottomNavigation
Component/OfflineBanner

==================================================
10. DEFINE INTERACTION INTENT
==================================================

For every important interactive element, make the intended action visually obvious.

Examples:

Play button → starts selected game

Game card → opens game introduction

Continue → advances current game

Pause → pauses gameplay

Resume → returns to gameplay

Complete game → shows result

Result → return to games/home

Reminder → opens reminder details

Memory → opens memory details

Voice button → begins voice interaction

Language option → changes selected language

Profile settings → opens corresponding setting

Do not create hidden interactions that would be difficult for Manus to infer.

==================================================
11. SHOW REALISTIC CONTENT, NOT PLACEHOLDER TEXT
==================================================

Use realistic NeuroNERd content throughout the prototype.

Example patient-facing language:

"Good morning, Amma"

"What would you like to do?"

"Your next reminder is at 10:00 AM"

"Take a little time to play a game."

"Your memories"

"Today's routine"

"Let's play Memory Match"

"Look carefully."

"Which objects did you see?"

"What comes next?"

"Well done!"

"Your activity is saved."

Keep language warm, simple, short, and respectful.

Do not use Lorem Ipsum.

==================================================
12. NORTHEAST INDIA CULTURAL CONTEXT
==================================================

Keep culturally familiar content respectful and subtle.

Use visual examples inspired by Northeast Indian daily life where appropriate:

• Assam tea
• flowers
• baskets
• traditional textiles
• familiar household objects
• local landscapes
• culturally familiar everyday objects

Do not turn the interface into a decorative cultural theme.

Cultural elements should support familiarity and recognition rather than become visual clutter.

==================================================
13. DO NOT OVERDESIGN
==================================================

This is extremely important.

Do NOT add:

• unnecessary animations
• complex charts
• excessive illustrations
• tiny decorative elements
• complicated gestures
• excessive gradients
• glassmorphism
• excessive shadows
• dense dashboards
• gamification badges everywhere
• competitive leaderboards
• stressful countdown timers

The patient application should feel:

CALM
SAFE
SIMPLE
FAMILIAR
WARM
REASSURING

==================================================
14. CREATE A FINAL DESIGN HANDOFF PAGE
==================================================

Create one final clearly named section/page:

"NEURONERD — MANUS HANDOFF"

This page should contain a concise visual specification for the engineering agent.

Include:

A. PRODUCT PURPOSE

NeuroNERd is an elderly-friendly cognitive gaming and memory assistance application designed for elderly users in the Northeast Region of India.

It provides:
• cognitive games
• memory assistance
• reminders
• daily routines
• multilingual interaction
• voice assistance
• offline-first operation
• caregiver-connected activity tracking

It is NOT a diagnostic or clinical assessment application.

B. PRIMARY NAVIGATION

Home
Games
Memories
Reminders
Profile

C. CORE GAMES

Memory Match
Object Recall
Pattern Sequence

D. DESIGN PRINCIPLES

Large text
Large touch targets
High contrast
Simple navigation
Minimal cognitive load
Calm interaction
No clinical language
Offline-friendly UX

E. OFFLINE PRINCIPLE

User actions must continue working without internet.

Game sessions and relevant user activity should be saved locally and synchronized when connectivity returns.

F. IMPLEMENTATION TARGET

React Native
Expo
TypeScript
SQLite local-first storage
Supabase backend
Offline synchronization
Accessible native mobile UI

G. IMPORTANT ENGINEERING RULE

The Figma design is the visual and interaction source of truth.

Do not expose secrets or backend credentials in the design.

Do not modify or recreate the existing Supabase database schema from Figma.

==================================================
15. FINAL QUALITY CHECK
==================================================

Before finishing:

• Verify all major screens exist.
• Verify all important states exist.
• Verify games have complete flows.
• Verify offline states exist.
• Verify accessibility variants exist.
• Verify repeated UI is componentized.
• Verify frame names are meaningful.
• Verify there are no generic "Frame 1" style names where meaningful names are possible.
• Verify navigation labels are consistent.
• Verify no medical diagnosis language exists.
• Verify no critical information depends only on color.
• Verify the existing design system has not been replaced.
• Verify the prototype remains visually coherent.

DO NOT spend the remaining effort making decorative visual details more elaborate.

Prioritize STRUCTURE, NAMING, STATES, ACCESSIBILITY, NAVIGATION, AND HANDOFF CLARITY.

This is the FINAL Figma design pass.

After completing this pass, STOP.
Do not continue generating additional features.