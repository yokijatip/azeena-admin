<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import SiteHeader from "$lib/components/site-header.svelte";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";
</script>

<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="inset" />
	<Sidebar.Inset>
		<SiteHeader />
		<div class="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<h1 class="text-3xl font-bold tracking-tight">Products</h1>
					<p class="text-muted-foreground">Manage your product catalog and inventory</p>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Product Management</CardTitle>
						<CardDescription>This page is ready for your product management features</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							Content coming soon - You can add product listings, inventory management, and more here.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
