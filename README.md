# Naruto Draft

A FIFA Ultimate Team-style character draft game built on the Naruto / Naruto
Shippūden roster — 209 characters, 6 team roles, a 2-discard draft, and an
automated battle simulator. Ships as a web app and as a native Android app
that wraps the same web app.

## Project layout

```
webapp/                  Self-contained web app (no build step, no deps)
  index.html
  css/style.css
  js/characters.js       209-character database (stats, tiers, art)
  js/game.js              Draft engine, AI, battle simulator, rendering

android/                 Android Studio project (WebView shell)
  app/src/main/java/...  MainActivity — loads webapp/ via WebViewAssetLoader
  app/build.gradle        syncWebAssets task mirrors ../webapp into assets/
```

`webapp/` is the single source of truth for all game content and logic. The
Android app does not duplicate it — every build copies the latest `webapp/`
into `app/src/main/assets/` automatically (see the `syncWebAssets` Gradle
task), so the two can never drift apart.

## Running the web app

No build step or dependencies. Serve the `webapp/` folder with any static
file server and open it:

```
cd webapp
python3 -m http.server 8080
# open http://localhost:8080
```

## Building the Android app

Requires Android Studio (or the SDK command-line tools) with SDK Platform 34
and Build-Tools 34.0.0.

```
cd android
./gradlew assembleDebug
# APK: app/build/outputs/apk/debug/app-debug.apk
```

Or open the `android/` folder directly in Android Studio and click Run.

## Game rules

- Each match draws random characters (no duplicates) from the 209-character
  pool, one at a time, alternating between the two players.
- Every team fills exactly 6 roles: **Leader, Attacker, Defender, Support,
  Healer, Wildcard**. Each role favors different attributes (shown as a
  chemistry % when assigning a card).
- Each player gets **2 discards** per match. Once both are used, every
  subsequent card must be drafted.
- Once both rosters are full, an automated battle simulator runs 6
  role-vs-role matchups (weighted, with team chemistry as a multiplier) and
  crowns a winner and match MVP.

## Modes

- **Single Player** — draft against an AI opponent that weighs role fit,
  OVR, and its remaining discards.
- **Two Player** — local hotseat draft on one device/screen.

## Notes on character art

Card art links to Narutopedia (Fandom) via `Special:FilePath` redirects.
Fandom's Cloudflare bot-protection can return a challenge page instead of an
image for some direct/hotlinked requests (this affects automated browsers
more than everyday users, but can happen either way). Every card therefore
has a CSS-only fallback: initials on a tier-colored badge, shown immediately
on a load error and, as a backstop, after a 3-second timeout if the request
never resolves either way. The game is fully playable with or without the
art loading.
