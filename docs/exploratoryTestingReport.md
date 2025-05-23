# Exploratory Testing Report for Monefy App

## Exploratory Testing Charters

### 1. **Transaction Entry (Expense/Income)**
- **Objective**: Verify users can add one-time and recurring transactions with **correct calculations**.
- **Scope**: Numeric input, operator buttons, category selection, and recurring setup.

### 2. **Category Selection**
- **Objective**: Validate category assignment during transaction entry and filtering.
- **Scope**: "CHOOSE CATEGORY" button, category settings, and category persistence.

### 3. **Reporting/Filtering**
- **Objective**: Test date filters (Day/Week/Month/Year/All/Interval) for income/expense reports.
- **Scope**: Accuracy of filtered data and date picker functionality.

### 4. **Navigation & Menu**
- **Objective**: Confirm menu items (Categories, Accounts, Currencies, Settings) navigate correctly.
- **Scope**: Sidebar options, screen transitions, and settings accessibility.

### 5. **Balance Calculation**
- **Objective**: Check if expenses and incomes update the total balance accurately.
- **Scope**: Real-time balance updates and historical data consistency.

### 6. **Input Validation**
- **Objective**: Test numeric keypad, decimal input, and error handling for invalid entries.
- **Scope**: Operators (+, -, ×, ÷), decimal point, and edge cases (e.g., €0.00).

### 7. **Synchronization & Backup**
- **Objective**: Verify synchronization with Dropbox/Google Drive and data backup/restore functionality.
- **Scope**: "Create data backup," "Restore data," "Clear data," and sync options.

### 8. **Passcode Protection**
- **Objective**: Ensure passcode setup secures app access and functions as intended.
- **Scope**: Passcode creation, app locking, and bypass attempts.

### 9. **Premium Features & Purchases**
- **Objective**: Validate "Unlock Money Premium" functionality and post-purchase feature accessibility.
- **Scope**: Purchase flow, Premium-only features, and Purchase ID copying.

### 10. **Data Export & Support**
- **Objective**: Confirm "Export to file" generates valid data and support links work.
- **Scope**: File export format, "Contact support," and "Privacy Policy" accessibility.

### 11. **UI/UX Settings**
- **Objective**: Test Dark theme toggle, language/currency persistence, and date configurations.
- **Scope**: Theme switching, language/currency updates, and first day of week/month settings.

---

### Findings

| **Issue**                        | **Description**                                                                 | **Severity** | **Priority** |
|----------------------------------|---------------------------------------------------------------------------------|--------------|--------------|
| **Division by zero handling**    | No error message displayed when user attempts division by zero operation. | High         | P0           |
| **9-digit input limit constraint** | Maximum input restricted to 9 digits. Which leads to wrong calculation without error message.| Medium       | P1           |

---

#### **Prioritization Rationale**:
- **P0 (Division by zero)**: Critical functional error impacting core calculations and user trust.  

---

## Prioritization of Charters

1. **Balance Calculation (Critical)**: Incorrect balance risks user trust.  
2. **Transaction Entry (High)**: Recurring transactions are a Premium selling point. 
3. **Reporting/Filtering (High)**: Core feature for financial tracking.   
4. **Passcode Protection (High)**: Security flaw leaves user data unprotected.
5. **Premium Features (High)**: Broken purchases impact revenue and user trust.  
6. **Input Validation (Medium)**: Operator ambiguity could confuse users.
7. **Navigation & Menu (Medium)**: Unclear currency settings may frustrate users.  
8. **Synchronization (Medium)**: Data loss risk if backups/sync fail.  
9. **Data Export (Medium)**: Missing file details reduce functionality.  
10. **UI/UX Settings (Medium)**: Typos and theme persistence harm usability.
11. **Category Selection (Low)**: Typos are minor but affect professionalism.

---

## Risks to Mitigate

- **Financial Accuracy**: Miscalculations in balances or transactions could lead to user financial loss.  
- **Data Integrity**: Transactions not saving or recurring records failing to trigger.  
- **Security**: Sensitive financial data must be encrypted (not visible in UI).  
- **Usability**: Confusing UI elements (e.g., operators, typos) reduce user adoption.  
- **Compliance**: GDPR/regional regulations for financial apps (e.g., EU).  
