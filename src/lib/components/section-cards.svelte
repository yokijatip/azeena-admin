<script lang="ts">
        import TrendingDownIcon from "@tabler/icons-svelte/icons/trending-down";
        import TrendingUpIcon from "@tabler/icons-svelte/icons/trending-up";
        import { Badge } from "$lib/components/ui/badge/index.js";
        import * as Card from "$lib/components/ui/card/index.js";
</script>

<div
        class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4"
>
        <Card.Root class="@container/card">
                <Card.Header>
                        <Card.Description>Total Sales</Card.Description>
                        <Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                Rp 15.250.000
                        </Card.Title>
                        <Card.Action>
                                <Badge variant="outline">
                                        <TrendingUpIcon />
                                        +15.2%
                                </Badge>
                        </Card.Action>
                </Card.Header>
                <Card.Footer class="flex-col items-start gap-1.5 text-sm">
                        <div class="line-clamp-1 flex gap-2 font-medium">
                                Trending up this month <TrendingUpIcon class="size-4" />
                        </div>
                        <div class="text-muted-foreground">Sales for the last 30 days</div>
                </Card.Footer>
        </Card.Root>
        <Card.Root class="@container/card">
                <Card.Header>
                        <Card.Description>Pending Orders</Card.Description>
                        <Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                42
                        </Card.Title>
                        <Card.Action>
                                <Badge variant="outline">
                                        <TrendingUpIcon />
                                        +5%
                                </Badge>
                        </Card.Action>
                </Card.Header>
                <Card.Footer class="flex-col items-start gap-1.5 text-sm">
                        <div class="line-clamp-1 flex gap-2 font-medium">
                                Increased from yesterday <TrendingUpIcon class="size-4" />
                        </div>
                        <div class="text-muted-foreground">Orders awaiting fulfillment</div>
                </Card.Footer>
        </Card.Root>
        <Card.Root class="@container/card">
                <Card.Header>
                        <Card.Description>Total Products</Card.Description>
                        <Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                856
                        </Card.Title>
                </Card.Header>
                <Card.Footer class="flex-col items-start gap-1.5 text-sm">
                        <div class="line-clamp-1 flex gap-2 font-medium">
                                Inventory is stable
                        </div>
                        <div class="text-muted-foreground">Active SKUs across all shops</div>
                </Card.Footer>
        </Card.Root>
        <Card.Root class="@container/card">
                <Card.Header>
                        <Card.Description>Active Workers</Card.Description>
                        <Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                12
                        </Card.Title>
                </Card.Header>
                <Card.Footer class="flex-col items-start gap-1.5 text-sm">
                        <div class="line-clamp-1 flex gap-2 font-medium">
                                Full team active
                        </div>
                        <div class="text-muted-foreground">Production and warehouse staff</div>
                </Card.Footer>
        </Card.Root>
</div>
