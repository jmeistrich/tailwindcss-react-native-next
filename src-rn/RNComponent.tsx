import { Text } from "react-native";

export function RNComponent({ className }: { className?: string}){
    return (
      <>
        <Text className="font-bold">RN component</Text>
        <Text className={className}>RN component with className prop</Text>
      </>
    );
}