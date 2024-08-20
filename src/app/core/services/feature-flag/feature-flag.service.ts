import { Injectable } from '@angular/core';
import { featureFlags } from 'src/flags/flags';

/**
 * Author - Romario - romario.estrada@endlessadventuresinc.com
 */
@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  /**
   * This get to the featureFlags and watch if there is a flag with the name
   * @param flagName - The flag name
   * @returns boolean
   */
  hasFlag(flagName: string): boolean {
    for (var flagN in featureFlags) {
      if (flagName == flagN) {
        // console.log(flagName + ' == ' + featureFlags[flagName].active);
        return featureFlags[flagName].active;
      }
    }
    return false;
  }
}
