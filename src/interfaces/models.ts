declare module models {
  type TrackIndicatorProps = DefaultComponentProps & {
    equipment: Equipment;
  };

  type Location = {
    latitude: number;
    longitude: number;
  };

  type Equipment = {
    id: string;
    name: string;
    imageUrl: string;
    status: 'available' | 'unavailable' | 'maintenance';
    tag: string;
    latitude: number;
    longitude: number;
  };

  type EquipmentCardProps = DefaultComponentProps & {
    equipment: Equipment;
    isLastItem?: boolean;
    disabled?: boolean;
    loading?: boolean;
  };

  type EquipmentCardContainerProps = {
    isLastItem?: boolean;
  };

  type InputProps = DefaultComponentProps &
    import('react-native').TextInputProps & {
      disabled?: boolean;
      control: import('react-hook-form').Control<any, any, any>;
      error?: string;
      name: string;
      required?: boolean;
    };

  type DefaultComponentProps = {
    children?: React.ReactNode;
    containerStyle?: import('react-native').ViewStyle;
  };

  type HeaderProps = {
    variant?: 'page' | 'home';
    title?: string;
    color?: string;
    onPress?: () => void;
  };

  type HeaderTitleProps = {
    color: string;
  };
}
