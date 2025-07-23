# Token Storage Best Practices
## Where to Store Tokens?

| Storage Option         | Description                                                           | Security Level | Use Case                                  |
| ---------------------- | --------------------------------------------------------------------- | -------------- | ----------------------------------------- |
| `HttpOnly Cookies`     | Sent automatically with every request. Not accessible via JavaScript. | ⭐⭐⭐⭐           | Best for **authentication** tokens (JWT). |
| `localStorage`         | Easy to access via JavaScript, persistent across tabs and reloads.    | ⭐⭐             | Use **only** for non-sensitive tokens.    |
| `sessionStorage`       | Similar to `localStorage`, but data clears on tab close.              | ⭐⭐             | Good for temporary tokens in single tab.  |
| `Memory (JS Variable)` | Stored only while app is running. Lost on refresh.                    | ⭐              | Suitable for volatile, short-term tokens. |

# Vulnerabilities & Recommendations
## Risk	Impact	Solution
XSS (Cross-Site Scripting)	Can expose tokens from local/sessionStorage	Use HttpOnly cookies and sanitize all user inputs
CSRF (Cross-Site Request Forgery)	Cookie-based tokens may be abused in CSRF attacks	Use SameSite=Strict and add CSRF tokens manually
Token Theft	If stolen, attackers can impersonate users	Add token expiration, refresh tokens, and device checks
Storing in Git/Hardcoding	Secrets/tokens hardcoded in frontend/backend	Use .env files and never commit them

## Recommended Practices
Use HttpOnly, Secure cookies for storing access tokens.

Set short expiration for access tokens (e.g., 15 mins).

Use refresh tokens in a secure cookie to obtain new access tokens.

Rotate tokens and revoke on logout or suspicious activity.

Use environment variables to store secrets (JWT secret, keys).

Implement token blacklisting or tracking if using long-lived tokens.