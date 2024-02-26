import { i18n } from '../services/translator';

function formatDistance(distanceInMeters: number): string {
  const metersPerKilometer = 1000;

  if (distanceInMeters < metersPerKilometer) {
    return `${distanceInMeters} ${i18n.t('global.meters')}`;
  } else {
    const distanceInKilometers = distanceInMeters / metersPerKilometer;
    return `${distanceInKilometers.toFixed(2)} ${i18n.t('global.kilometers')}`;
  }
}

export { formatDistance };
