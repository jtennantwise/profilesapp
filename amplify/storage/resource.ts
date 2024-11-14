import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'hrcalcCSVs',
access: (allow) => ({
    'csv-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  })
});
