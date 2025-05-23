# Test Architecture & Implementation Strategy

## Overview
This document describes the design and implementation approach for the Monefy App test automation suite. It explains the use of the ScreenAction pattern, which organizes test logic into modular, stateless, screen-specific action modules. The document outlines key principles such as stateless implementation, action-scoped locators, and user-centric element identification.

## 🧱 Design Pattern: ScreenAction Approach

### Core Principles
I employ a **ScreenAction pattern** that emphasizes modular, stateless operations over class-based abstractions. This approach organizes test logic into screen-specific modules with atomic action functions.

**Key Features:**
- **Screen-Centric Modules**: One file per app screen (e.g., `mainScreen.actions.ts`, `filter.actions.ts`)
- **Stateless Implementation**: No persistent state between actions
- **Action-Scoped Locators**: Locators defined within functions when used once
- **User-Centric Element Identification**: Prioritize visible text and content descriptions

**Implementation Guidelines:**
1. Each screen maintains its own action module
2. Functions represent singular user interactions:
   ```typescript
   // mainScreen.actions.ts
   export async function getCurrentBalance(): Promise<number> {
      const balance = await $('#balance_amount').getText();
      return parseBalanceToNumber(balance);
   };
   ```
3. Shared locators centralize cross-action elements

---

### 🧪 Testing Implementation

#### Layered Architecture
```
Test Cases → Screen Actions → Appium Driver
```

**Core Implementation Rules:**
1. **Action Layer Isolation**: Tests interact exclusively with ScreenAction functions:
   ```typescript
   // transactions.spec.ts
   await mainScreenActions.setIncome(200, 'Salary');
   expect(await mainScreenActions.getCurrentBalance()).toEqual(initialBalance + 200);
   ```

2. **Test Data Management**:
   - Embed scenario-specific data directly in tests:
   ```typescript
   it('Validates expense transactions', async () => {
     const expenseAmount = 100; // In-test declaration
     await mainScreenActions.setExpense(expenseAmount, 'Bills');
   });
   ```
   - User data provider layer for shared data `./test/data/`

3. **Scenario Focus**:
   - Each `it()` block validates one discrete behavior
   - Each test case is starting with clear app state.
   - Each test case is totally independant on other cases.
   - Aligns with existing test cases:
     - Transaction balance updates
     - Date filter isolation

4. **Assertion Strategy**:
   - Validate business outcomes over UI mechanics:
   ```typescript
   // Validate balance update
   expect(currentBalance).toEqual(getInitialBalance() - expenseAmount);
   ```

---

## Rationale & Benefits
This architecture delivers:
- **Enhanced Maintainability**: Direct screen-to-module mapping simplifies updates
- **Reduced Complexity**: Stateless functions eliminate cross-method dependencies
- **Clear Traceability**: Failures directly map to specific screen interactions
- **Team Scalability**: Parallel development of screen modules
- **Adaptability**: Quick response to UI changes through focused updates

---

This structured approach optimizes for maintainability and clarity while directly supporting the current test scope. The design decisions reflect practical experience in mobile test automation and emphasis on sustainable test architecture.

