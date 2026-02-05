<script lang="ts">
        import BrandShopeeIcon from "@tabler/icons-svelte/icons/brand-shopee";
        import BrandTiktokIcon from "@tabler/icons-svelte/icons/brand-tiktok";
        import ShirtIcon from "@tabler/icons-svelte/icons/shirt";
        import ShoppingCartIcon from "@tabler/icons-svelte/icons/shopping-cart";
        import Receipt2Icon from "@tabler/icons-svelte/icons/receipt-2";
        import UsersIcon from "@tabler/icons-svelte/icons/users";
        import SettingsIcon from "@tabler/icons-svelte/icons/settings";
        import HelpIcon from "@tabler/icons-svelte/icons/help";
        import SearchIcon from "@tabler/icons-svelte/icons/search";
        import DashboardIcon from "@tabler/icons-svelte/icons/dashboard";
        import NavDocuments from "./nav-documents.svelte";
        import NavMain from "./nav-main.svelte";
        import NavSecondary from "./nav-secondary.svelte";
        import NavUser from "./nav-user.svelte";
        import * as Sidebar from "$lib/components/ui/sidebar/index.js";
        import type { ComponentProps } from "svelte";

        const data = {
                user: {
                        name: "Owner",
                        email: "owner@clothingbiz.com",
                        avatar: "/avatars/admin.jpg",
                },
                navMain: [
                        {
                                title: "Dashboard",
                                url: "#",
                                icon: DashboardIcon,
                        },
                        {
                                title: "Products",
                                url: "#",
                                icon: ShirtIcon,
                        },
                        {
                                title: "Orders",
                                url: "#",
                                icon: ShoppingCartIcon,
                        },
                        {
                                title: "Finance",
                                url: "#",
                                icon: Receipt2Icon,
                        },
                        {
                                title: "Workers",
                                url: "#",
                                icon: UsersIcon,
                        },
                ],
                navIntegrations: [
                        {
                                title: "Shopee Shop",
                                icon: BrandShopeeIcon,
                                url: "#",
                        },
                        {
                                title: "TikTok Shop",
                                icon: BrandTiktokIcon,
                                url: "#",
                        },
                ],
                navSecondary: [
                        {
                                title: "Settings",
                                url: "#",
                                icon: SettingsIcon,
                        },
                        {
                                title: "Get Help",
                                url: "#",
                                icon: HelpIcon,
                        },
                ],
        };

        let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
        <Sidebar.Header>
                <Sidebar.Menu>
                        <Sidebar.MenuItem>
                                <Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
                                        {#snippet child({ props })}
                                                <a href="##" {...props}>
                                                        <ShirtIcon class="!size-5" />
                                                        <span class="text-base font-semibold">Clothing Business</span>
                                                </a>
                                        {/snippet}
                                </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Content>
                <NavMain items={data.navMain} showQuickCreate={true} />
                <Sidebar.Group>
                        <Sidebar.GroupLabel>Integrations</Sidebar.GroupLabel>
                        <NavMain items={data.navIntegrations} showQuickCreate={false} />
                </Sidebar.Group>
                <NavSecondary items={data.navSecondary} class="mt-auto" />
        </Sidebar.Content>
        <Sidebar.Footer>
                <NavUser user={data.user} />
        </Sidebar.Footer>
</Sidebar.Root>
