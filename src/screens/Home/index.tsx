import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import { i18n } from '../../services/translator';
import { useTheme } from 'styled-components';
import { RefreshControl } from 'react-native';

const Home: React.FC = () => {
  const {
    colors: { gray5, primary },
  } = useTheme();
  const { control, watch } = useForm();
  const [equipments, setEquipments] = useState<models.Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const { search } = watch();
  const filteredEquipments = useMemo(() => {
    if (!search) return equipments;
    return equipments.filter(equipment =>
      equipment.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [equipments, search]);

  const reloadEquipments = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setEquipments([
        {
          id: '1',
          name: 'Esteira',
          imageUrl: 'https://i.ibb.co/YydP9rY/Esteira.jpg',
          status: 'available',
          latitude: -23.55052,
          longitude: -46.633308,
          tag: 'Aeróbico',
        },
        {
          id: '2',
          name: 'Cadeira extensora',
          imageUrl: 'https://i.ibb.co/QFcy5bD/extensora.jpg',
          status: 'available',
          latitude: -23.55052,
          longitude: -46.633308,
          tag: 'Perna',
        },
        {
          id: '3',
          name: 'Pulley',
          imageUrl: 'https://i.ibb.co/N2YRVVL/pulley.jpg',
          status: 'available',
          latitude: -23.55052,
          longitude: -46.633308,
          tag: 'Posteriores',
        },
        {
          id: '4',
          name: 'Leg press',
          imageUrl: 'https://i.ibb.co/D55Xdvz/legpress.jpg',
          status: 'unavailable',
          latitude: -23.55052,
          longitude: -46.633308,
          tag: 'Perna',
        },
        {
          id: '5',
          name: 'Supino inclinado',
          imageUrl: 'https://i.ibb.co/87cfdn7/supino.jpg',
          status: 'maintenance',
          latitude: -23.55052,
          longitude: -46.633308,
          tag: 'Peito',
        },
      ] as models.Equipment[]);
      setLoading(false);
    }, 2000);
  }, [search]);

  useEffect(() => {
    reloadEquipments();
  }, [search]);

  return (
    <S.Container>
      <StatusBar style="light" animated />
      <S.WallpaperContainer>
        <S.BrandWallpaperVector />
      </S.WallpaperContainer>
      <S.ContentContainer>
        <S.HeaderContainer>
          <S.HeaderContent>
            <S.Header variant="home" />
          </S.HeaderContent>
          <S.Title>{i18n.t('screens.home.title')}</S.Title>
          <S.Description>{i18n.t('screens.home.description')}</S.Description>
        </S.HeaderContainer>
        <S.Content>
          <S.SearchContainer>
            <S.Input
              control={control}
              name="search"
              placeholder={i18n.t('screens.home.search')}
            />
          </S.SearchContainer>
          <S.BottomSheetContainer>
            <S.EquipmentList
              data={loading ? Array.from({ length: 5 }) : filteredEquipments}
              refreshControl={
                <RefreshControl
                  progressBackgroundColor={gray5}
                  refreshing={false}
                  onRefresh={reloadEquipments}
                  tintColor={primary}
                  colors={[primary]}
                />
              }
              contentContainerStyle={{
                paddingHorizontal: 24,
                paddingTop: 56,
                paddingBottom: 24,
              }}
              keyExtractor={(_equipment, index) => String(index)}
              renderItem={({ item: equipment, index }) => (
                <S.EquipmentCard
                  isLastItem={index === equipments.length - 1}
                  equipment={equipment as models.Equipment}
                  loading={loading}
                />
              )}
            />
          </S.BottomSheetContainer>
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Home;
