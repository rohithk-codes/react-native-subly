import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { tabs } from "@/constants/data";
import clsx from "clsx";
import { Image } from "expo-image";

const TabLayout = ()=>{

  const TabIcon = ({focused,icon}:TabIconProps)=>{
    return (
      <View className="tab-icon">
        <View className={clsx('tabs-pill',focused && 'tabs-active')}>
          <Image source={icon} className="tabs-glyph" />
        </View>
      </View>
    )
  }

<Tabs screenOptions={{headerShown:false}}>
{tabs.map((tab)=>(
<Tabs.Screen
 key={tab.name}
  name={tab.name} 
  options={{ title: tab.title, tabBarIcon: ({ focused })=>(
    <TabIcon focused={focused} icon={tab.icon} />
  ) }} />

))}

</Tabs>

}
  

