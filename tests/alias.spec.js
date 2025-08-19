import {expect, test} from "@playwright/test";

import { formatDate } from '@/utils/date-utils.js';

test('alias', async ({ page }) => {
    expect(formatDate()).toBe('aliased');
});