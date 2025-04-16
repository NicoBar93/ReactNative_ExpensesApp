import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 19.99,
    date: new Date("2021-12-18"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 29.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e3",
    description: "A pair of pants",
    amount: 99.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e4",
    description: "A pair of books",
    amount: 199.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e5",
    description: "A pair of socks",
    amount: 9.99,
    date: new Date("2021-12-21"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 19.99,
    date: new Date("2021-12-18"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 29.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "A pair of pants",
    amount: 99.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e9",
    description: "A pair of books",
    amount: 199.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e10",
    description: "A pair of socks",
    amount: 9.99,
    date: new Date("2021-12-21"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
